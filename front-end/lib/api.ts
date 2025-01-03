export const fetchJobs = async (filters: JobFilters, page: number, limit: number): Promise<Job[]> => {
    // Prepare the data to send in the POST request
    const requestData = {
      skills: filters.skills || [],
      experience: filters.experience,
      location: filters.location,
      page: page,
      page_size: limit,
    };
  
    try {
      const response = await fetch('http://localhost:5000/filter-jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
  
      const data = await response.json();
      return data; // Return the fetched job data from API
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return []; // Return an empty array in case of error
    }
  };
  