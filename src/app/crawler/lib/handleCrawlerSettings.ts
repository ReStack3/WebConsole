// hooks/useCrawlerSettings.js
"use client";

import { useState } from 'react';

export const useCrawlerSettings = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!selectedOption) {
    //   setError('请选择一个选项');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/crawler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ option: selectedOption })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || '提交失败');
      
      return data;
    } catch (err) {
    //   setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedOption,
    setSelectedOption,
    handleSubmit,
    loading,
    error
  };
};