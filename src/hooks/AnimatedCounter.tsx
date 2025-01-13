'use client'

import { CounterType } from '@/constants/counter';
import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ end, suffix }: CounterType) => (
  <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
    <CountUp start={0} end={end} duration={2} suffix={suffix} />
  </div>
);

export default AnimatedCounter;
