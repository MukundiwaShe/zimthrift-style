import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User, Heart, MapPin } from "lucide-react";

const Account = () => {
  // Mock user data (will be replaced with actual user state)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+263 77 123 4567",
  };

  const orders = [
    {
      id: "ORD001",
      date: "2025-01-15",
      status: "Delivered",
      total: 33,
      items: 3,
    },
    {
      id: "ORD002",
      date: "2025-01-10",
      status: "In Transit",
      total: 25,
      items: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">My Account</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{user.phone}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
              <Button variant="ghost" className="w-full text-destructive">
                Sign Out
              </Button>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4 mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Order History</h2>
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              Order #{order.id}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {order.items} items • ${order.total}
                            </p>
                            <p className="text-xs text-muted-foreground">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant={
                              order.status === "Delivered" ? "default" : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Wishlist</h2>
                <Card>
                  <CardContent className="p-12 text-center">
                    <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your wishlist is empty</p>
                    <Button variant="outline" className="mt-4">
                      Browse Products
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Delivery Addresses
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Market Square</p>
                          <p className="text-sm text-muted-foreground">
                            Avondale, Harare
                          </p>
                          <Badge variant="outline" className="mt-2">
                            Default
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Button variant="outline" className="w-full mt-4">
                  + Add New Address
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
