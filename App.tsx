import { useWallet } from '@suiet/wallet-kit';
import ProposalList from './components/ProposalList';

export default function App() {
  const { connected, connect, disconnect, account } = useWallet();

  const mockBalance = 1000;
  const mockStaked = true;

  const votingPower = mockStaked ? mockBalance * 2 : mockBalance;

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">$WOLF DAO Governance</h1>

      {!connected ? (
        <button
          onClick={connect}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="mb-2">Address: {account?.address}</p>
          <p className="mb-2">Balance: {mockBalance} $WOLF</p>
          <p className="mb-2">Staked on Moonbags: {mockStaked ? 'Yes' : 'No'}</p>
          <p className="mb-4">Voting Power: {votingPower}</p>
          <button
            onClick={disconnect}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Disconnect
          </button>
        </div>
      )}

      <hr className="my-6 border-gray-600" />

      <ProposalList votingPower={votingPower} />
    </div>
  );
}