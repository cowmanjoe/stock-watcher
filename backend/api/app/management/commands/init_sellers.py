import datetime
import pytz

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
                for i in range(10):
                    seller = mixer.blend(Seller)

                    for j in range(3):
                        product = mixer.blend(Product)

                        inventory_report = InventoryReport(seller=seller, timestamp=datetime.datetime.now(tz=pytz.UTC), product=product, level="low")
                        inventory_report.save()
                    print(seller.id)

                print("Initialized Dummy Data")
                break

            # If not random, add the desired sellers        
            seller = mixer.blend(Seller, name=seller_name)
            seller.save()

            print("Added:", seller_name)