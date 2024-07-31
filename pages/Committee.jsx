import React, { useState, useEffect } from 'react';
import './style.css';

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState(null);

  // Function to toggle the dropdown menu
  const toggleDropdown = (id) => {
    setActiveCommittee((prevActiveCommittee) => (prevActiveCommittee === id ? null : id));
  };

  useEffect(() => {
    const updateActiveCommittee = () => {
      if (window.innerWidth >= 768) {
        setActiveCommittee('committee0');
      } else {
        setActiveCommittee(null);
      }
    };

    updateActiveCommittee();
    window.addEventListener('resize', updateActiveCommittee);
    return () => {
      window.removeEventListener('resize', updateActiveCommittee);
    };
  }, []);

  const committees = [
    {
      id: 'committee0',
      name: 'Patrons',
      members: [
        { name: 'Sh. Kaptan Singh', role: 'President, SMES, New Delhi' },
        { name: 'Ms. Esha Jakhar', role: 'Vice - President, SMES, New Delhi' },
        { name: 'Prof. Prem Vrat', role: 'Pro - Chancellor, North Cap University, Gurgaon' },
        { name: 'Sh. Karnal Singh', role: 'IPS, Former Director - Enforcement Directorate' },
        { name: 'Mr. Ajit Singh Chaudhary', role: 'Secretary, SMES, New Delhi' },
        { name: 'Mr. Raj Pal Solanki', role: 'Treasurer, SMES, New Delhi' },
        { name: 'Dr. Tejbir Singh Rana', role: 'Chairman, Academic Committee, SMES, New Delhi' },
        { name: 'Sh. S.S. Solanki', role: 'Chairman Disciplinary(L), SMES, New Delhi' },
      ],
    },
    {
      id: 'committee1',
      name: 'Organising Chair',
      members: [
        { name: 'Prof. Archana Balyan', role: 'Director, MSIT' },
      ],
    },
    {
      id: 'committee2',
      name: 'Convener',
      members: [
        { name: 'Prof. Koyel Datta Gupta', role: '' },
      ],
    },
    {
      id: 'committee3',
      name: 'Co-Conveners',
      members: [
        { name: 'Prof. Puneet Azad', role: '' },
        { name: 'Dr. Deepshikha Yadav', role: '' },
        { name: 'Dr. Anju Dhillon', role: '' },
      ],
    },
    {
      id: 'committee4',
      name: 'Technical Review Committee',
      members: [
        { name: 'Dr. Ajay Gahlot', role: '' },
        { name: 'Dr. Anupama Kaushik', role: '' },
        { name: 'Dr. Deepti Deshwal', role: '' },
        { name: 'Dr. Tripti Rathee', role: '' },
      ],
    },
    {
      id: 'committee5',
      name: 'Program Committee',
      members: [
        { name: 'Prof. Puneet Azad', role: '' },
        { name: 'Mr. Manoj Malik', role: '' },
      ],
    },
    {
      id: 'committee6',
      name: 'Finance Committee',
      members: [
        { name: 'Prof. Man Singh', role: '' },
      ],
    },
    {
      id: 'committee7',
      name: 'Publication Committee',
      members: [
        { name: 'Dr. Sakshi Rajput', role: '' },
        { name: 'Dr. Preeti Sehrawat', role: '' },
      ],
    },
    {
      id: 'committee8',
      name: 'Publicity Committee',
      members: [
        { name: 'Dr. Kavita Sheoran', role: '' },
        { name: 'Dr. Deepshika Yadav', role: '' },
      ],
    },
    {
      id: 'committee9',
      name: 'Website Committee',
      members: [
        { name: 'Dr. Vikrant Shokeen', role: '' },
      ],
    },
    {
      id: 'committee10',
      name: 'Sponsorship Committee, MSIT',
      members: [
        { name: 'Dr. Anju Dhillon', role: '' },
        { name: 'Mr. Surender Bhanwala', role: '' },
        { name: 'Mr. Akshay Singh', role: '' },
      ],
    },
    {
      id: 'committee11',
      name: 'Stage Committee, MSIT',
      members: [
        { name: 'Dr. Shaily Malik', role: '' },
        { name: 'Ms. Neelam Nehra', role: '' },
      ],
    },
    {
      id: 'committee12',
      name: 'Hospitality Committee, MSIT',
      members: [
        { name: 'Dr. Vimal Gaur', role: '' },
        { name: 'Dr. Rakhi Kamra', role: '' },
        { name: 'Dr. Gitanjali', role: '' },
        { name: 'Ms. Annu Bhure', role: '' },
        { name: 'Ms. Gunjan', role: '' },
        { name: 'Ms. Vaani', role: '' },
      ],
    },
  ];

  return (
    <section id="committee" className="committee-section section hauto">
    <div className="w-full">
      <div className="bg-white pt-12 md:px-[10%]">
        <div className="pt-16">
          <h1 className="text-[#c00000] text-center text-3xl font-[600]">
            COMMITTEES
          </h1>
          <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 m-5">
          <div className="w-full md:w-[300px] relative">
            <ul className="space-y-2">
              {committees.map((committee) => (
                <li key={committee.id} className="relative">
                  <button
                    className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500 border border-borderColor ${
                      activeCommittee === committee.id ? 'bg-gray-500 text-white' : ''
                    }`}
                    onClick={() => toggleDropdown(committee.id)}
                  >
                    {committee.name}
                  </button>
                  <ul
                    id={committee.id}
                    className={`${
                      activeCommittee === committee.id ? 'block' : 'hidden'
                    } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                  >
                    {committee.members.map((member, index) => (
                      <li key={index} className="px-3 py-1 text-black">
                        ● {member.name} - {member.role}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block mt-4 md:mt-0 w-full md:w-[800px] bg-white rounded-md shadow-lg p-5 border borderColor">
            {committees.map(
              (committee) =>
                activeCommittee === committee.id && (
                  <ul key={committee.id} className="text-left">
                    {committee.members.map((member, index) => (
                      <li key={index} className="px-3 py-1 text-black">
                        ● {member.name} - {member.role}
                      </li>
                    ))}
                  </ul>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Committee;
