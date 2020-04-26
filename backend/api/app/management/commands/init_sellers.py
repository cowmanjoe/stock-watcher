from api.app import util

from django.core.management.base import BaseCommand
from api.app.models import Seller as Seller, InventoryReport, Product
from mixer.backend.django import mixer


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('seller_names', nargs='+', type=str)

    def handle(self, *args, **options):
        # Initialize Dummy Store Data
        for seller_name in options["seller_names"]:
            if seller_name == "RANDOM":
                util.initialize_database()

            # If not random, add the desired sellers        
            seller = mixer.blend(Seller, name=seller_name)
            seller.save()

            print("Added:", seller_name)