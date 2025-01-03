import React, { FC } from 'react';

interface FilterProps {
  onApplyFilters: (filters: Record<string, string | string[]>) => void;
}

const Filter: FC<FilterProps> = ({ onApplyFilters }) => {
  const handleApplyFilters = () => {
    const filters = {
      experience: (document.getElementById('experience') as HTMLSelectElement).value,
      location: (document.getElementById('location') as HTMLInputElement).value,
      jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
      skills: (document.getElementById('skills') as HTMLInputElement).value.split(','),
      role: (document.getElementById('role') as HTMLSelectElement).value,
      interest: (document.getElementById('interest') as HTMLInputElement).value,
    };
    onApplyFilters(filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
        Let&apos;s <span className="text-[#436ef5]">Filter</span> Jobs?
      </h2>
      <div className="flex flex-col lg:flex-row border shadow-md rounded-lg p-6 w-full mx-auto">
        <div className="flex-1 mb-4 lg:mb-0 lg:mr-6 flex justify-center items-center flex-col">
          <h2 className="text-2xl font-bold text-gray-300 mb-2">
            Find Your Perfect <span className="text-[#436ef5]">Job</span>
          </h2>
          <p className="text-gray-400 text-center">
            Use the filters to narrow down your job search based on experience, location, job title, skills, and more.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-4 lg:gap-6">
          {/* Experience Filter */}
          <label htmlFor="experience" className="text-sm font-medium text-gray-500">Experience Level</label>
          <select id="experience" className="p-2 border rounded">
            <option value="">Select</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
          {/* Other Filters */}
          <label htmlFor="location" className="text-sm font-medium text-gray-500">Location</label>
          <input id="location" placeholder="Enter location" className="p-2 border rounded" />
          
          <label htmlFor="jobTitle" className="text-sm font-medium text-gray-500">Job Title</label>
          <input id="jobTitle" placeholder="Enter job title" className="p-2 border rounded" />
          
          <label htmlFor="skills" className="text-sm font-medium text-gray-500">Skills</label>
          <input id="skills" placeholder="Enter skills (e.g., React, Python)" className="p-2 border rounded" />
          
          <label htmlFor="role" className="text-sm font-medium text-gray-500">Role</label>
          <select id="role" className="p-2 border rounded">
            <option value="">Select Role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          
          <label htmlFor="interest" className="text-sm font-medium text-gray-500">Interest</label>
          <input id="interest" placeholder="Enter interest (e.g., AI, Web Development)" className="p-2 border rounded" />
          
          <button onClick={handleApplyFilters} className="bg-[#436ef5] text-white p-2 rounded mt-4">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
