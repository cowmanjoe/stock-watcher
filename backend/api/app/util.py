import datetime
import pytz
import random

from api.app.models import Seller, Product, InventoryReport
from mixer.backend.django import mixer


PRODUCT_TYPE_CHOICES = (
    "Toilet Paper",
    "Bread",
    "Painkillers",
    "Soil",
    "Bottled Water",
    "Paper Towels",
    "Hand Sanitizer",
    "Instant Noodles",
    "Fruit",
    "Meat",
    "Shampoo",
)


def clear_database():
    Seller.objects.all().delete()
    InventoryReport.objects.all().delete()
    Product.objects.all().delete()


def initialize_database(num_sellers=10, num_reports=3):
    for i in range(num_sellers):
        seller = mixer.blend(Seller)

        for j in range(num_reports):
            product_type = PRODUCT_TYPE_CHOICES[random.randint(0, len(PRODUCT_TYPE_CHOICES) - 1)]
            product = mixer.blend(Product, product_type=product_type)

            mixer.blend(
                InventoryReport,
                seller=seller,
                timestamp=datetime.datetime.now(tz=pytz.UTC),
                product=product
            )
        print(seller.id)

    print("Initialized Dummy Data")