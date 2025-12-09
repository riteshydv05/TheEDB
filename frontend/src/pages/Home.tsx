import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI';
import { FaAward, FaUsers, FaCalendar, FaBook, FaUniversity, FaNewspaper, FaPen, FaGlobe } from 'react-icons/fa';

const Home: React.FC = () => {
  const features = [
    {
      icon: FaNewspaper,
      title: 'Publications',
      description: 'TIRESIA magazine and research papers published regularly',
    },
    {
      icon: FaUsers,
      title: 'Creative Team',
      description: 'Talented writers, editors, and designers working together',
    },
    {
      icon: FaCalendar,
      title: 'Events',
      description: 'Literary events, workshops, and competitions',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Recognized for outstanding contributions to campus literature',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-primary-dark overflow-hidden min-h-[75vh] flex items-center">
        {/* University Building Background with full opacity */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/university-building.jpg" 
            alt="" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Official Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/20">
                <FaUniversity className="text-accent-orange" />
                Official Publishing Body of MMMUT
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              <span className="font-semibold">The Editorial Board</span> is the official publishing body of 
              Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. 
              We foster excellence in academic research, creative writing, and scholarly discourse 
              within our vibrant university community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/team">
                <Button size="md" className="w-full sm:w-auto">
                  Meet Our Team
                </Button>
              </Link>
              <Link to="/publications">
                <Button variant="secondary" size="md" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-dark">
                  <FaBook className="mr-2" /> View Publications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-accent-orange rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 tracking-tight">
              About The Editorial Board
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Established as the premier literary and publishing organization of MMMUT, 
                The Editorial Board has been the cornerstone of creative and academic expression 
                on campus. We publish <span className="font-semibold text-accent-orange">TIRESIA</span>, 
                our flagship magazine that showcases the best of student writing, artwork, and research.
              </p>
              <p>
                Our mission is to provide a platform for students to express their ideas, 
                share their research, and develop their writing skills while contributing to 
                the intellectual growth of our university community.
              </p>
            </div>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-4">
                <FaPen className="text-3xl text-accent-orange mx-auto mb-3" />
                <p className="font-semibold text-primary-dark">Creative Writing</p>
              </div>
              <div className="text-center p-4">
                <FaBook className="text-3xl text-accent-orange mx-auto mb-3" />
                <p className="font-semibold text-primary-dark">Research Papers</p>
              </div>
              <div className="text-center p-4">
                <FaGlobe className="text-3xl text-accent-orange mx-auto mb-3" />
                <p className="font-semibold text-primary-dark">Campus News</p>
              </div>
              <div className="text-center p-4">
                <FaAward className="text-3xl text-accent-orange mx-auto mb-3" />
                <p className="font-semibold text-primary-dark">Competitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 tracking-tight">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From publishing magazines to organizing literary events, we're dedicated to 
              fostering a culture of creativity and academic excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-orange group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-2xl text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary-dark tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/editorial-board-text.png" 
              alt="The Editorial Board" 
              className="h-10 md:h-12 object-contain"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-dark tracking-tight">
            Join Our Creative Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Be part of MMMUT's official publishing body. Whether you're a writer, designer, 
            photographer, or simply passionate about literature, there's a place for you here.
          </p>
          <Link to="/contact">
            <Button size="md">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary-dark to-primary-light text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-orange">16+</div>
              <div className="text-sm text-gray-300 font-medium">Magazine Volumes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-yellow">1000+</div>
              <div className="text-sm text-gray-300 font-medium">Students Reached</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-blue">50+</div>
              <div className="text-sm text-gray-300 font-medium">Events Organized</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-cyan">100+</div>
              <div className="text-sm text-gray-300 font-medium">Published Articles</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
