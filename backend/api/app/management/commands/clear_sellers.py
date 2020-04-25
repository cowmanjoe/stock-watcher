from django.core.management.base import BaseCommand, CommandError
from api.app.models import Seller as Seller

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('seller_names', nargs='+', type=str)

    def handle(self, *args, **options):
        
        # Iterate through inputted sellers
        for seller_name in options['seller_names']:

            # If inputted "ALL", delete all current sellers
            if seller_name == "ALL":
                Seller.objects.all().delete()
                print("Removed all Sellers")
                break
            
            # Try to remove the seller
            try:
                seller = Seller.objects.get(name=seller_name)
            except Seller.DoesNotExist:
                raise CommandError('Seller "%s" does not exist' %seller_name)
            
            # If multiple sellers with same name exist, delete all the sellers
            except Seller.MultipleObjectsReturned:
                sellers = Seller.objects.filter(name=seller_name)
                sellers.delete()
                print('Multiple Sellers with the name "%s" exist, All have been removed' %seller_name)

            seller.opened = False
            seller.save()

            print("Removed:", seller_name)
            