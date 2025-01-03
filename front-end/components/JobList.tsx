"use client"
import React, { FC, useState, useEffect } from 'react';
import Filter from './Filter';
import { fetchJobs, Job, JobFilters } from '../lib/api';

const JobList: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<JobFilters>({});
  const [showJobs, setShowJobs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilters = (newFilters: JobFilters) => {
    setFilters(newFilters);  // Apply new filters
    setShowJobs(false);  // Hide job list temporarily
    setLoading(true);     // Start loading when filters are applied
  };

  useEffect(() => {
    const loadJobs = async () => {
      if (Object.keys(filters).length > 0) {
        const jobResults = await fetchJobs(filters, 1, 10);  // Assuming pagination (page 1, limit 10)
        setJobs(jobResults);
        setLoading(false); // Stop loading when jobs are fetched
        setShowJobs(true); // Show jobs after fetching
      }
    };

    if (showJobs) {
      loadJobs(); // Trigger job fetching
    }
  }, [filters, showJobs]);

  return (
    <div className="p-4">
      <Filter onApplyFilters={handleFilters} />
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <>
          {showJobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="border p-4 rounded mb-2">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Experience: {job.experience}</p>
                <p>Skills: {job.skills.join(', ')}</p>
              </div>
            ))
          ) : showJobs ? (
            <p>No jobs found.</p>
          ) : null}
        </>
      )}
    </div>
  );
};

export default JobList;
