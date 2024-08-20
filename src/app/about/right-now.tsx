"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export default function RightNow() {
  const [time, setTime] = useState<string>('');
  const [activity, setActivity] = useState<string>('');
  const [emoji, setEmoji] = useState<string>('');

  useEffect(() => {
    setTime(get_right_now());
    setActivity(get_activity_now());
    setEmoji(get_emoji_now());

    const intervalId = setInterval(() => {
      setTime(get_right_now());
      setActivity(get_activity_now());
      setEmoji(get_emoji_now());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="about-page-content-item item60 item-gradient items-center leading-6">
      <p className='text-7xl'>{emoji}</p>
      <p>{activity}</p>
      <p>{time}</p>
    </div>
  );
}

function get_right_now(): string {
  const local_time = moment().tz("Europe/Oslo").format('HH:mm');
  return `My local time is: ${local_time}`;
}

function get_activity_now(): string {
  const local_time = moment().tz("Europe/Oslo").hour();

  if (local_time >= 0 && local_time < 8) {
    return get_sleeping_text();
  }

  if (local_time >= 8 && local_time < 16) {
    return get_study_text();
  }

  if (local_time >= 16 && local_time <= 17) {
    return get_cooking_text();
  }

  if (local_time > 17 && local_time < 24) {
    return get_free_text();
  }

  return 'Just existing...'; // Default case if none of the conditions match
}

function get_emoji_now(): string {
  const local_time = moment().tz("Europe/Oslo").hour();

  if (local_time >= 0 && local_time < 8) {
    return '💤';
  } else if (local_time >= 8 && local_time < 16) {
    return '👨‍💻';
  } else if (local_time >= 16 && local_time <= 17) {
    return '☕';
  } else if (local_time > 17 && local_time < 24) {
    return '📚';
  }

  return '🙂'; // Default case if none of the conditions match
}

// Functions for generating activity text based on time
function get_sleeping_text(): string {
  const options = [
    'zZZzzz Mimimimi...',
    'looking at the back of my eyelids',
    'currently slumbering off',
    'currently hibernating...',
    'In my nightly coma'
  ];
  return options[Math.floor(Math.random() * options.length)];
}

function get_cooking_text(): string {
  const options = [
    'Cooking up some immaculate food',
    'Cooking up some Hearty Durians'
  ];
  return options[Math.floor(Math.random() * options.length)];
}

function get_study_text(): string {
  const options = [
    'Doing important student stuff',
    'Off to Hogwarts learning new spells',
    'Feeding on some books',
    'Currently studying',
    'Compiling new knowledge to my brain',
    'Integrating new knowledge'
  ];
  return options[Math.floor(Math.random() * options.length)];
}

function get_free_text(): string {
  const options = [
    'Hobbying my hobbies',
    'Hacking together some side project magic',
    'Fighting off Voldemort',
    'Bouldering on some boulders!',
    'Currently reading a new book',
    'Currently doing homework',
    'Watching a ghibli movie',
    'Trying not to kill my plant',
    'Looking for Korok seeds...'
  ];
  return options[Math.floor(Math.random() * options.length)];
}
