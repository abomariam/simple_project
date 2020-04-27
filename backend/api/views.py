from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import PointsSerializer


class CalculateDistanceView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PointsSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)