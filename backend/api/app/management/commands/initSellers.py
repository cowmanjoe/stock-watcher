import datetime

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
                    store_name = 'store' + str(i)

                    if i % 2 == 0:
                        location_name = 'near'
                        stock_name = 'We got Hella'
                    else:
                        location_name = 'far'
                        stock_name = 'We got None'
                    
                    seller = Seller(name=store_name, location=location_name)
                    seller.save()

                    product = Product(name="Charmin Ultra", product_type="Toilet Paper")
                    product.save()

                    inventory_report = InventoryReport(seller=seller, timestamp=datetime.datetime.now(), product=product, level="low")
                    inventory_report.save()

                print("Initialized Dummy Data")
                break

            # If not random, add the desired sellers        
            seller = Seller(name=seller_name, location='Up your butt', stock_levels='We got Hella')
            seller.save()

            print("Added:", seller_name)