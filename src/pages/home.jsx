import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,

} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, travellerData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://github.com/blockhotelxyz/web/blob/main/home-img.png?raw=true')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
               Block Hotel
              </Typography>
              <Typography
                variant="h3"
                color="white"
                className="mb-6 font-black"
              >
                Your decentralized journey starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Block Hotel is the new way to travel with hotels using blockchain. 
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with Hotel Bearer Tokens
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Block Hotel introduces the concept of Hotel Bearer Tokens to the travel industry. 
                Hotel Bearer Tokens enable the Hotel to separate consumption of the stay from the 
                commerce of the stay. Guests simply present their Hotel Bearer Tokens at the Hotel 
                when they wish to take advantage of stay held by the bearer token. 
                <br />
                Thus any plan changes on the part of the Guest are managed by the guest right up to 
                Hotel Bearer Token presentation to the Hotel.
                <br />

              </Typography>
              
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Bringing Evolution to Hospitality
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    With Block Hotel, you the Hotel are able to broaden your Guest offering at low risk and high tech 
                    empowering you to introduce new, innovative experiences to the Hotels and travel market. 
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="For Hotels">
          <a id="Hotels"></a>

             Block Hotel offers Hotels the ability to sell their inventory in advance to the market for upfront payment. Compared to today where Hotel inventory can go unsold, resulting in loss for 
             the Hotel.
             <p>
              with Block Hotel we leverage the power of market dynamics and blockchain based Decentralized Finance to enable market based distributors such as Online Travel Agents to pay for 
             inventory on advance purchase removing the need for lengthy commercial contract chains and driving early financial settlement on Hotel inventory.
              </p>
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="For Guest & Travellers" >
            <a id="Travellers"></a>
            For the traveller Block Hotel simplifies the process of making changes both planned and unplanned to travel arrangements for the travel. Through Block Hotel Guests and Travellers will 
            be able to adjust their Hotel stays using the power of the market to absorb the impact of stringent Hotel stay conditions. Further adjustments can be made without consultation with the 
            Hotel, giving Guests and Travellers new travel freedoms.

          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {travellerData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this <b> <a href="https://forms.gle/cYxWdZntGSn7FoeW9">form</a></b> and we will get back to you in 24 hours.
          </PageTitle>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
