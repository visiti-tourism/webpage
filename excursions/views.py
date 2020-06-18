from datetime import datetime
from django.views.generic import (
    ListView,
    DetailView,
    CreateView
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from .models import Excursion


def superuser_or_agency(user):
    return user.is_superuser or user.groups.filter(name='agencies').exists()


class ExcursionListView(ListView):
    model = Excursion
    template_name = 'excursions/excursions.html'
    context_object_name = 'excursions'
    ordering = ['-created']


class ExcursionDetailView(DetailView):
    model = Excursion


class ExcursionCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Excursion
    fields = ['name', 'places', 'price', 'duration', 'comment']
    success_url = '/home'

    def test_func(self):
        return superuser_or_agency(self.request.user)

    def get_login_url(self):
        if not self.request.user.is_authenticated:
            return super(ExcursionCreateView, self).get_login_url()
        else:
            return '/accounts/login/'

    def form_valid(self, form):
        form.instance.agent = self.request.user
        form.instance.created = datetime.now()
        return super(ExcursionCreateView, self).form_valid(form)
