import datetime
import pytz

from api.app.models import Seller, Product, InventoryReport
from mixer.backend.django import mixer

def clear_database():
    Seller.objects.all().delete()
    InventoryReport.objects.all().delete()
    Product.objects.all().delete()


def initialize_database(num_sellers=10, num_reports=3):
    for i in range(num_sellers):
        seller = mixer.blend(Seller)

        for j in range(num_reports):
            product = mixer.blend(Product)

            mixer.blend(
                InventoryReport,
                seller=seller,
                timestamp=datetime.datetime.now(tz=pytz.UTC),
                product=product
            )
        print(seller.id)

    print("Initialized Dummy Data")