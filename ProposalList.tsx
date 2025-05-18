import { useState } from 'react';

const dummyProposals = [
  { id: 1, title: 'Should $WOLF burn 1% weekly?' },
  { id: 2, title: 'Add Bubo as official mascot?' },
];

export default function ProposalList({ votingPower }: { votingPower: number }) {
  const [votes, setVotes] = useState<{ [key: number]: string }>({});

  const handleVote = (id: number, option: string) => {
    setVotes((prev) => ({ ...prev, [id]: option }));
    localStorage.setItem(`vote-${id}`, option);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Active Proposals</h2>
      {dummyProposals.map((proposal) => (
        <div key={proposal.id} className="mb-6 border p-4 rounded border-gray-700">
          <h3 className="text-lg font-medium mb-2">{proposal.title}</h3>
          <p className="text-sm mb-2">Your Voting Power: {votingPower}</p>
          <div className="flex gap-2">
            {['Yes', 'No', 'Abstain'].map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded ${
                  votes[proposal.id] === option ? 'bg-green-600' : 'bg-gray-700'
                }`}
                onClick={() => handleVote(proposal.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}