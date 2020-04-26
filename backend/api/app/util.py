import datetime
import pytz
import random

from api.app.models import Seller, Product, InventoryReport
from mixer.backend.django import mixer


PRODUCT_CHOICES = (
    ("Charmin Ultra Soft Toilet Paper, 12 Mega Rolls Bath Tissue", "Toilet Paper"),
    ("10 Rolls Silky & Smooth Soft Professional Series Premium 3-Ply Toilet Paper", "Toilet Paper"),
    ("Wonder bread", "Bread"),
    ("Premium Potting Mix 5L Bag", "Soil"),
    ("Less Mess Soil, Top Dressing Blend", "Soil"),
    ("Fiji Natural Artesian Water, 500mL (Pack of 6 Bottles)", "Bottled Water"),
    ("Nestle Pure Life Purified Water, 16.9 oz. Bottles, 2 Cases (24 Bottles)", "Bottled Water"),
    ("Flow Alkaline Spring Water, 100% Natural Alkaline Water, Eco-Friendly Packaging", "Bottled Water"),
    ("Shop Purell Advanced Hand Sanitizer, Pump Aloe", "Hand Sanitizer"),
    ("Germ-X Hand Sanitizer Gel", "Hand Sanitizer"),
    ("Shop Purell Advanced Hand Sanitizer, Pump Aloe", "Hand Sanitizer"),
    ("Shop Purell Advanced Hand Sanitizer, Pump Original", "Hand Sanitizer"),
    ("Ibumie Penang White Curry Instant Noodles, 420 Gram", "Instant Noodles"),
    ("MAMA Instant Noodles Artificial Pork Flavor, 30 Pkgs.x 2.12 Oz.(60g)", "Instant Noodles"),
)


SELLER_CHOICES = (
    "Costco",
    "Walgreens",
    "Loblaws",
    "Safeway",
    "Save-on Foods",
    "Choices Market",
    "Pharmasave",
    "Shoppers Drug Mart",
    "London Drugs",
)


def clear_database():
    Seller.objects.all().delete()
    InventoryReport.objects.all().delete()
    Product.objects.all().delete()


def initialize_database(num_sellers=10, num_reports=3):
    for i in range(num_sellers):
        seller = mixer.blend(Seller, name=SELLER_CHOICES[random.randint(0, len(SELLER_CHOICES) - 1)])

        for j in range(num_reports):
            product_index = random.randint(0, len(PRODUCT_CHOICES) - 1)

            product_name, product_type = PRODUCT_CHOICES[product_index]
            product = mixer.blend(Product, name=product_name, product_type=product_type)

            mixer.blend(
                InventoryReport,
                seller=seller,
                timestamp=datetime.datetime.now(tz=pytz.UTC),
                product=product
            )
        print(seller.id)

    print("Initialized Dummy Data")