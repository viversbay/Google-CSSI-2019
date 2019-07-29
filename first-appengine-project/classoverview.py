from google.appengine.ext import ndb

class Car(ndb.Model):
    carModel = ndb.StringProperty(required=True)
    carMake = ndb.StringProperty(required=True)

    def printCarInfo(self):
        print(self.carMake + " " + self.carModel)

car1 = Car(carMake = "Lincoln", carModel = "MKX")
car1.printCarInfo()

car_query = Car.query()
print(car_query)
all_cars = Car.query().fetch()
print(all_cars)
