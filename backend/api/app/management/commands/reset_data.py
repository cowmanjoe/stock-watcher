
from django.core.management.base import BaseCommand

from api.app import util


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('--num_sellers', type=int, default=10, required=False)
        parser.add_argument('--num_inventory_reports', type=int, default=3, required=False)

    def handle(self, *args, **options):
        util.clear_database()
        print('Database cleared')

        util.initialize_database(options['num_sellers'], options['num_inventory_reports'])
