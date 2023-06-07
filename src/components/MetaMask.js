import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMask = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      const web3Instance = new Web3(window.web3.currentProvider);
      setWeb3(web3Instance);
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      console.log('MetaMask not detected');
    }
  };

  return (
    <div>
        {account ? (
            <h1>Connected Account: {account}</h1>
        ) : (
            <button onClick={connectToMetaMask}>Connect MetaMask</button>
        )}
    </div>
  )
}

//   return (
//     <div>
//       <h1>Connected Account: {account}</h1>
//       <button onClick={connectToMetaMask}>Connect MetaMask</button>
//     </div>
//   );
// };

export default MetaMask;
