import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import NewOrder from './components/newOrder/NewOrder.jsx';
import Orders from './components/orders/Orders.jsx';
import ClaimOrder from './components/claimOrder/ClaimOrder.jsx';

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// import {
//   RainbowKitProvider,
//   getDefaultWallets,
//   connectorsForWallets
// } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import { http, createConfig } from '@wagmi/core'
// import { mainnet, base } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';
// import { walletConnect } from 'wagmi/connectors';

const projectId = '6294b532df5960882362a7c11c528559'; // Replace with your WalletConnect Cloud projectId

// Define chains
// const chains = [mainnet, base];

// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains,
//   projectId, // Pass your projectId here
// });

// const config = createConfig({
//   autoConnect: true,
//   connectors,
//   provider
// });

// export const config = createConfig({
//   chains: [mainnet, base], 
//   connectors: [
//     walletConnect({
//       projectId: '6294b532df5960882362a7c11c528559',
//     }),
//   ],
//   transports: { 
//     [mainnet.id]: http(),
//     [base.id]: http()
//   }, 
// })

const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient();



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/neworders" element={<NewOrder />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/claimOrder" element={<ClaimOrder />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <Navbar />
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
