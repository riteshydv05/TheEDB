import React from 'react';
import CircularGallery from '../components/Common/CircularGallery';

const Team: React.FC = () => {
  const finalYearMembers = [
    { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop', text: 'Priya Sharma\nComputer Science\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop', text: 'Rahul Verma\nElectrical Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop', text: 'Ananya Reddy\nMechanical Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop', text: 'Arjun Patel\nCivil Engineering\nFinal Year' },
    { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', text: 'Vikram Singh\nChemical Engineering\nFinal Year' },
  ];

  const preFinalYearMembers = [
    { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop', text: 'Sneha Desai\nComputer Science\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=600&fit=crop', text: 'Rohan Gupta\nElectronics Engineering\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop', text: 'Kavya Nair\nBiotechnology\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=600&fit=crop', text: 'Aditya Kumar\nInformation Technology\nPre-Final Year' },
    { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop', text: 'Ishita Malhotra\nMechanical Engineering\nPre-Final Year' },
  ];

  const sophomoreMembers = [
    { image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop', text: 'Aarav Joshi\nComputer Science\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop', text: 'Diya Rao\nElectrical Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop', text: 'Riya Bansal\nCivil Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=600&fit=crop', text: 'Karan Mehta\nMechanical Engineering\nSophomore' },
    { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop', text: 'Sanya Kapoor\nChemical Engineering\nSophomore' },
  ];

  return (
    <div className="min-h-screen bg-white py-20" style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, 'Times New Roman', Times, serif" }}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary-dark">Meet Our Team</h1>
        <p className="text-base text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Our dedicated editorial team at The Editorial Board ensures the highest standards of academic excellence
        </p>

        {/* Team Photo */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/team-photo.jpg" 
              alt="The Editorial Board Team" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Final Year Members */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-accent-orange">Final Year Members</h2>
          <div style={{ height: '700px', position: 'relative' }}>
            <CircularGallery 
              items={finalYearMembers}
              bend={0} 
              textColor="#ff6b35" 
              borderRadius={0.05} 
              scrollEase={0.08}
              font="bold 26px 'Palatino Linotype', serif"
            />
          </div>
        </div>

        {/* Pre-Final Year Members */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-accent-yellow">Pre-Final Year Members</h2>
          <div style={{ height: '700px', position: 'relative' }}>
            <CircularGallery 
              items={preFinalYearMembers}
              bend={0} 
              textColor="#f4d04a" 
              borderRadius={0.05} 
              scrollEase={0.08}
              font="bold 26px 'Palatino Linotype', serif"
            />
          </div>
        </div>

        {/* Sophomore Members */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-accent-blue">Sophomore Members</h2>
          <div style={{ height: '700px', position: 'relative' }}>
            <CircularGallery 
              items={sophomoreMembers}
              bend={0} 
              textColor="#0099ff" 
              borderRadius={0.05} 
              scrollEase={0.08}
              font="bold 26px 'Palatino Linotype', serif"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

