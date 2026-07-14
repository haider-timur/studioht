---
title: "buulbuul Ja Ja Ja Nee Nee Nee residency"
description: "A lecture on my project about Kazakh typography and archiving it in different scripts. Part of Studio Dull x BarTalk series."
date: 2024-09-01
thumbnail: /assets/images/sazsırnay_2.jpg
layout: project
images:
  - src: /assets/images/DSCF0382.jpg
    alt: ""
    caption: Photo by © Zinmong Studio
audio:
  - src: /assets/audio/buulbuul-JJJNNN_2_MMAUDIO_master.mp3
  
---

<p>Having formed a duo called 'buulbuul' (from Kazakh 'nightingale'), my collaborator and friend Kas and I have joined a residency at Ja Ja Ja Nee Nee Nee Radio for slightly more than 1 month to experiment with sound & poetry under the concept of 'gül and bulbul' (from Kazakh 'flower and nightingale').</p>

<p>For this residency, guided by Radna Rumping, Arif Kornweitz and Andrea González, we have produced 3 interconnected songs in one piece. It is a poetry bundle, consisting of three poems in two languages, English and Kazakh. Birds, flowers, cruising, heartbreaks, flutes, drums, and love gardens with peris; a baq (garden) is an imaginary paradise of longing. Connecting and (re)interpreting traditional and modern imagery, the bundle explores what shape a modern queer understanding of Central Asian poetry and sound can take.</p>

<p>You can read more about the piece <a href="https://jajajaneeneenee.com/shows/nargis-e-mast-na/">here</a>.</p>

<div id="custom-audio-player">
  <button class="audio-btn" id="toggle-btn" onclick="toggleAudio()">
  <span id="icon">
  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>
</span>
</button>
  <div class="progress-container" onclick="seek(event)">
    <div class="progress-bar"></div>
  </div>
  <span class="time" id="time-display">0:00 / 0:00</span>
</div>

<audio id="audio" src="/assets/audio/buulbuul-JJJNNN_2_MMAUDIO_master.mp3" preload="metadata"></audio>

<style>
  #custom-audio-player {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Plex Mono', monospace;
  }

  .audio-btn {
    background-color: transparent; 
    color: currentColor;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .audio-btn svg {
    width: 15px;
    height: 15px;
    display: block;
    fill: currentColor;
  }

  .progress-container {
    flex: 1;
    height: 8px;
    background-color: #ccc;
    position: relative;
    cursor: pointer;
  }

  .progress-bar {
    height: 100%;
    background-color: currentColor;
    width: 0%;
  }

  .time {
    font-size: 12px;
    color: #555;
    min-width: 80px;
    text-align: right;
  }
</style>


<script>
  const audio = document.getElementById('audio');
  const toggleBtn = document.getElementById('toggle-btn');
  const progressBar = document.querySelector('.progress-bar');
  const timeDisplay = document.getElementById('time-display');
  const progressContainer = document.querySelector('.progress-container');

  // Set quiet default volume
  audio.volume = 0.2;

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    updateButton();
  }

  function updateButton() {
  const iconSpan = document.getElementById('icon');
  iconSpan.innerHTML = audio.paused
    ? '<svg width="12" height="12" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>'
    : '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="5" y="4" width="4" height="16" fill="currentColor"/><rect x="15" y="4" width="4" height="16" fill="currentColor"/></svg>';
  }

  function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  audio.addEventListener('loadedmetadata', () => {
    timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener('ended', updateButton);
  audio.addEventListener('play', updateButton);
  audio.addEventListener('pause', updateButton);

  function seek(event) {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percent = clickX / rect.width;
    audio.currentTime = percent * audio.duration;
  }
</script>