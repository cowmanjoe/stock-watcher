import datetime
import random

from django.core.management.base import BaseCommand, CommandError
from api.app.models import Seller as Seller, InventoryReport, Product


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('seller_names', nargs='+', type=str)

    def handle(self, *args, **options):
        # Initialize Dummy Store Data
        for seller_name in options["seller_names"]:
            if seller_name == "RANDOM":
                for i in range(10):
                    store_name = 'store ' + str(random.randint(0, 10000))
                    location_name = 'location ' + str(random.randint(0, 10000))
                    
                    seller = Seller(name=store_name, location=location_name)
                    seller.save()

                    product, created = Product.objects.get_or_create(name="Charmin Ultra", product_type="Toilet Paper")

                    inventory_report = InventoryReport(seller=seller, timestamp=datetime.datetime.now(), product=product, level="low")
                    inventory_report.save()

                print("Initialized Dummy Data")
                break

            # If not random, add the desired sellers        
            seller = Seller(name=seller_name, location='Up your butt')
            seller.save()

            print("Added:", seller_name)