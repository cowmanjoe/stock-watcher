from rest_framework import viewsets

from api.app.models import Seller
from api.app.serializers import SellerSerializer


class SellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
