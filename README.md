## Project

This project was deployed on Netlify. Check the live version [here](https://utilities-admin-page.netlify.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run it locally, first, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## The process

The project goal was to create an Admin panel to an utility company, using Next.js, [Chakra UI](https://chakra-ui.com/), and [React-ApexChart](https://apexcharts.com/).

I started by searching for design inspirations such as [Horizon Ui](https://horizon-ui.com/) and [Coded Themes](https://codedthemes.com/demos/admin-templates/datta-able/react/default/app/dashboard/default).

I used BC Hydro as the Utility Company, and followed the design system available at [BC Hydro](https://standards.bchydro.com/). 

I gathered the data from [Statistics Canada](https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2019001-eng.htm), [EPE - Brazil](https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/consumo-de-energia-eletrica), [BC Hydro](https://www.bchydro.com/index.html), and [Ontario Energy Board](https://www.oeb.ca/ontarios-energy-sector/ontario-electricity-and-natural-gas-utilities-service-area-map), to apply to the project.

I also used the [react-calendar](https://www.npmjs.com/package/react-calendar) package to create an interactive calendar.

To add a map, I decided to use [Leaflet](https://leafletjs.com/), and added the [React Leaflet](https://react-leaflet.js.org/docs/start-introduction/) to make it compatible with Next.js.


## Next Steps

Update the charts to more interactive ones, like [Infragistics](https://www.infragistics.com/).
