/* eslint-disable prettier/prettier */
const data = {
  photographyData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'PhotoArt',
      link: 'https://drive.google.com/file/d/1dLsmvdQ6Vj0SFXCQU0iQeDfpAO6T-5Xl/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 15K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      mode: 'ONLINE',
      content:
        '"Manipulation is the art of blending seemingly opposite realities into a single image." Photoart brings to you the opportunity to fill the canvas with master- strokes and create an ethereal piece of art! "'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'Portfolio in 24',
      link: 'https://drive.google.com/file/d/101LIy9PxEMaTdXmwn00QF-GHEzPrZJ0j/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 20K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      mode: 'OFFLINE',
      content:
        'We click a number of pictures and put them in the gallery, but  Portfolio in 24 hrs of FMC Weekend brings you a chance to show your skills on India’s largest digital art festival.'
    },
    {
      id: 3,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'InFocus',
      link: 'https://drive.google.com/file/d/1qmvXpDpIK2Eqg27t0x6JrXfUc6tGGcLy/view?usp=sharing',
      price: 179,
      prize: 'Prizes Worth- 15K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      mode: 'ONLINE',
      content:
        'Creativity and Composition being the essential parameters, the submissions should belong to any of the given themes and winners will be declared for each theme separately.'
    },
    {
      id: 4,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'InstaMeet',
      link: 'https://drive.google.com/file/d/1-TGcxnVzzvDMn15XrU8i0wVkV0Yd6HlL/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 10K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      mode: 'OFFLINE',
      content:
        '"Banaras is older than history; older than tradition, older than even legends and looks twice as old as all of them out together. Show us your perspective of mystic cultures through your lens.'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'SnapChase',
      link: 'https://drive.google.com/file/d/1NXxmu2LvOs5YSs6656aGB0ssj6lkUhhI/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 8K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      mode: 'OFFLINE',
      content:
        'Snapchase a unique photographic treasure hunt, takes you through an adrenaline rush in a chose around the campus. So get ready and enjoy the ride'
    }
  ],
  outreachData: [
    {
      id: 6,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Vlogoholic',
      link: 'https://drive.google.com/file/d/1PGRNDRLW6iwltSZZ1wlijhJ_RW5pWP09/view?usp=sharing',
      price: 179,
      prize: 'Prizes Worth- 10K',
      color: '#FFC900',
      color2: '#FFDC5A',
      mode: 'ONLINE',
      content:
        'Make a exciting video log of 60-600 sec span, for the theme “COLOUR OF MY CITY”. It can be about anything- visiting nearby scenes, indulging in festive stuff, etc.-as long as it aligns with the theme.'
    },
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Rant it',
      link: 'https://drive.google.com/file/d/1fReZW22DIarbLKt-OJXqNLCfWJnNCle7/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 6K',
      color: '#FFC900',
      color2: '#FFDC5A',
      mode: 'OFFLINE',
      content:
        'You will have to give a live solo open-mic performance of your rant. It could be a monologue, an interview, a prank or anything else that can captivate the interest of the public.'
    },
    {
      id: 8,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Ad-Mad',
      link: 'https://drive.google.com/file/d/1XOxiW1-SeaAjly0qlRQ7bKNhK374mXF1/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 10K',
      color: '#FFC900',
      color2: '#FFDC5A',
      mode: 'ONLINE',
      content:
        'The participants need to make an advertisement on the provided, within 36 hrs. The themes for the same would be released at the start of the event and participants need to submit their entries in due time.'
    }
  ],
  cineData: [
    {
      id: 9,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Thats how B-Roll',
      link: 'https://drive.google.com/file/d/1NNQxmqSS5uFP76N1QNwpr6xpZFeZaaJt/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 12K',
      color: '#14F0B9',
      color2: '#62FFD8',
      mode: 'ONLINE',
      content:
        'You’ve got to aim the lenses inwards and tell an interesting story about yourself; hence the theme - “I, Me and My Things – A Story”. Turn heads by weaving a tale involving your personal effects and goods.'
    },
    {
      id: 10,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Frame By Frame',
      link: 'https://drive.google.com/file/d/1d1Lx-14k060wLWUZ38_u5WrygoFT2yaF/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 7K',
      color: '#14F0B9',
      color2: '#62FFD8',
      mode: 'ONLINE',
      content:
        'Frame by Frame is an Open-theme Online Stop motion making event, and stop-motion entries are to be submitted in due time. The entries need to be created by using only inanimate objects.'
    },
    {
      id: 11,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Director’s Cut',
      link: 'https://drive.google.com/file/d/1K_bhsqIc6fWqrmyYQt9qQ62Q_ARJisiX/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 25K',
      color: '#14F0B9',
      color2: '#62FFD8',
      mode: 'OFFLINE',
      content:
        'Participants need to make a short film within 50 hours based on the theme provided to them in the campus at the start of the event.'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Trim it up',
      link: 'https://drive.google.com/file/d/189zd_IScMRLzf3uAx4ZLx_VwK2VbMVoG/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 10K',
      color: '#14F0B9',
      color2: '#62FFD8',
      mode: 'ONLINE',
      content:
        'Participants will be given different genres ,from which they will choose to make a video based on the clips given to them .The time duration of the video can be from 30-60 seconds.'
    }
  ],
  designData: [
    {
      id: 13,
      img: process.env.REACT_APP_AWS_S3_URI + '/designgrp.svg',
      genre: 'design',
      type: 'Contest',
      title: 'Design The Tunes',
      link: 'https://drive.google.com/file/d/1R-R-ftUpG-681a7hEL49k-XyUlbRuB4x/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 10K',
      color: '#685EDA',
      color2: '#9990FF',
      mode: 'ONLINE',
      content:
        'Ever thought of blending your design skills & music taste? This design challenge focuses to design the cover page of any song or an album. Usage of the elements of the songs or album can be done.'
    },
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/designgrp.svg',
      genre: 'design',
      type: 'Contest',
      title: 'Design-a-thon',
      link: 'https://drive.google.com/file/d/1lsyTiPeBkDaz1iuReBHh8srPnqyGPBRM/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 10K',
      color: '#685EDA',
      color2: '#9990FF',
      mode: 'OFFLINE',
      content:
        "It's a 24- hour offline event having team of 1-4 people each in which you'll have to rebrand an intriguing company using a different product line than the one it now uses."
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/designgrp.svg',
      genre: 'design',
      type: 'Contest',
      title: 'FrameX',
      link: 'https://drive.google.com/file/d/1Txf7wih2v0Y1p-wVx4w_8_E4mh9K1wBA/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 10K',
      color: '#685EDA',
      color2: '#9990FF',
      mode: 'ONLINE',
      content:
        "Passionate about building UI styles and designs? FrameX is a 7 days long design challenge, in which you'll have to submit an app wireframe and UI for the given PS."
    }
  ],
  mediaData: [
    {
      id: 16,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Straight from Site',
      link: 'https://drive.google.com/file/d/1XPNJBAiofFrRVNk49ipZIkrZDJG4lnix/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 12K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      mode: 'OFFLINE',
      content:
        'The participants will be provided with a set of "scenes". You\'ve to analyze the situation and consolidate your thoughts to deliver a report just like an on-site reporter by forming a coherent plot.'
    },
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: "Editor's House",
      link: 'https://drive.google.com/file/d/1PGWpLmhYlGdhpNuA2Jw06nq3OK-RttXS/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 14K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      mode: 'ONLINE',
      content:
        'Prompts will be given to the participants. They have to write their opinion upon a particular prompt. it will be in an editorial form.'
    },
    {
      id: 18,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Infinite Tales',
      link: 'https://drive.google.com/file/d/1mH6v171b-gErPXW80BffDq5hbBdfH6l1/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 10K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      mode: 'OFFLINE',
      content:
        'Participants have to come in pairs at the allotted location.They will be provided with the topics randomly. You and your partner have to complete the story by adding sentences alternatively.'
    },
    // {
    //   id: 19,
    //   img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
    //   genre: 'media',
    //   type: 'Contest',
    //   title: 'RJ hunt',
    //   link: 'https://docs.google.com/document/d/1Z9fW4LqzpUvOg2oNqwqkPZ_eYl8jhGOij02nMpnS2AE/edit?usp=sharing',
    //   price: 129,
    //   prize: 'Prizes Worth- 8K',
    //   color: '#FF90E8',
    //   color2: '#FFC8F4',
    //   content:
    //   'The Powerful yet energetic voices of  Radio Jockeys keep you hooked to the show just by their voices. They can make swirl a whole round of emotions around you. If you hold the power to hold the interests of a large audience just by your voice and entertain them throughout, Then FMC Weekend’s RJ hunt is definitely your thing; fasten your seat belt and be ready to get your ability tested by a Professional RJ Himself.'
    // },
    {
      id: 20,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Screenplay',
      link: 'https://drive.google.com/file/d/19Sw9GJU3CZU4vSbz-6v0vTxuYQk_relu/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 12K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      mode: 'ONLINE',
      content:
        '"To make a great film you need three things - the script, the script and the script."  - Alfred Hitchcock "'
    }
  ],
  animationData: [
    {
      id: 21,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Realm Of Wonders',
      link: 'https://drive.google.com/file/d/16jrBAjAh_6liE8HWQYXkAQ-41OrdlAOe/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 8K',
      color: '#FE6263',
      color2: '#FD8A8B',
      mode: 'ONLINE',
      content:
        'Every great animation began with just an idea. What if we gave you the idea of where to start and you show us the best result you can come up with?'
    },
    {
      id: 22,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Artscape',
      link: 'https://drive.google.com/file/d/125YOCPabo-UTDNW4Hbxz3zqCpkq_qglL/view?usp=share_link',
      price: 249,
      prize: 'Prizes Worth- 15K',
      color: '#FE6263',
      color2: '#FD8A8B',
      mode: 'OFFLINE',
      content:
        'Take reference of some place in Varanasi or campus and create it. (or some scene which represents the essence of Varanasi)'
    },
    {
      id: 23,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'VFXorama',
      link: 'https://drive.google.com/file/d/1wNTOZplAN5uAVFuRF6DsLjFB9zUNRCgk/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 15K',
      color: '#FE6263',
      color2: '#FD8A8B',
      mode: 'ONLINE',
      content:
        'Participants have to create a VFX based video. The scene must be placed in Varanasi.'
    },
    {
      id: 24,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Capture the Imagination',
      link: 'https://drive.google.com/file/d/1HhUbFEgVHdL8IjHBOJ-PAl3Sn7gMdHm6/view?usp=share_link',
      price: 179,
      prize: 'Prizes Worth- 12K',
      color: '#FE6263',
      color2: '#FD8A8B',
      mode: 'ONLINE',
      content:
        'You need to create a 3D scene. There is no theme. Premade 3D models and textures from the internet can be used. A single image will be sent to the judges.'
    }
  ],
  photographyWorkshopData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/rathika.jpeg',
      color: '#00CCF5',
      color2: '#2ED9FC',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1ypZkoyI1x3Es-zCTiT0jytmZTazSXmNp/view?usp=sharing',
      price: 149,
      name: 'Rathika Ramasamy',
      date: '30th January',
      time: '5:00 p.m. - 6:00 p.m.',
      desc: 'Rathika Ramasay captures the beauty in nature in unbeleivbaly beautiful shots! Unparallelled experience behind the lense and unrivalled skills in the field proudly adorn her.'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/navin.jpeg',
      color: '#00CCF5',
      color2: '#2ED9FC',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1YyKAYn-PBXPoKSB1Z1iU6fa6wjaVGULL/view?usp=sharing',
      price: 199,
      name: 'Navin Vatsa',
      date: '13th February',
      time: '2:00 p.m. - 3:00 p.m.',
      desc: 'A Contributer to National Geographic Your Shot and a Mentor at Tamron India, Navin Vatsa caputes unbelievably beautiful photographs in search of soul!'
    }
    // {
    //   id: 3,
    //   img: 'https://drive.google.com/uc?export=view&id=10GSj5pAbMYv_Pb36iJO7US4Tg6AIsRjv',

    //   genre: 'photography',
    //   type: 'Workshop',
    //   title: 'Photo Art',
    //   link: 'https://drive.google.com/file/d/1nEwQqQeI5mulbMTA1I6u9YzXsLLLEiKC/view?usp=sharing',
    //   price: 129,
    //   prize: '10K'
    // }
  ],
  outreachWorkshopData: [
    {
      id: 4,
      img: process.env.REACT_APP_AWS_S3_URI + '/priyankaoutreach.png',
      color: '#FFC900',
      color2: '#FFDC5A',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Travel Vlogging',
      link: 'https://drive.google.com/file/d/1qTdAlnarcZ47eOS-R7O_ImNfsZPnvnBZ/view?usp=sharing',
      price: 149,
      name: 'Priyanka Chandola',
      date: '11th February',
      time: '4:00 p.m. - 5:00 p.m.',
      desc: 'From a software engineer to a YouTuber, Priyanka Chandola is going places with her ‘Desi Girl Traveller’ channel on social media platforms. She creates prize on travel in the digital space with the aim to break societal norms. Here’s a look at her journey.'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/csvenketaram.jpeg',
      color: '#FFC900',
      color2: '#FFDC5A',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Documentary Filmmaking workshop',
      link: 'https://drive.google.com/file/d/1-j7QXOXQpBTioe3S7jrTeydKBLGPkcZe/view?usp=sharing',
      price: 149,
      name: 'C.S. Venkateswaran',
      date: '11th February',
      time: '2:00 p.m. - 3:00 p.m.',
      desc: 'He is a National-award winning film critic, professor, documentary filmmaker and writer.'
    }
  ],
  cineWorkshopData: [
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/sanjayf.png',
      color: '#14F0B9',
      color2: '#62FFD8',
      genre: 'cine',
      type: 'Workshop',
      title: 'Filmmaking workshop ',
      link: 'https://drive.google.com/file/d/1pQMLQD-NpXDh26tlTystzPNsU9Mcxzge/view?usp=sharing',
      price: 149,
      name: 'Sanjay F. Gupta',
      date: '12th February',
      time: '5:00p.m. - 6:00 p.m',
      desc: 'Film Director, Cinematographer, and Photographer Sanjay F Gupta brings energy, creativity and professionalism to each and every production! The tale of his incredivle career and journey is one to applaud!'
    }
    // {
    //   id: 8,
    //   img: 'https://drive.google.com/uc?export=view&id=10GSj5pAbMYv_Pb36iJO7US4Tg6AIsRjv',
    //   genre: 'cine',
    //   type: 'Workshop',
    //   title: '(Screenwriting + cinematograpy) session',
    //   link: 'https://drive.google.com/file/d/1MF0nFWgHMGxGEU3Kad9qEKbAOTVWVM-w/view?usp=sharing',
    //   price: 199,
    //   date: '13th February',
    //   time: '4:00 p.m. - 5:00 p.m.',
    //   prize: 'Mitesh Shah + Anand Gandhi',
    //   desc: 'Acclaimed writer Mitesh Shah is known for his contributions to Helicopter Eela, Tumbbad, Mitwa, and the Intern. Indian filmmaker, entrepreneur, media producer and innovator Anand Gandhi is renowned for his debut feature film Ship of Thesaurus which won the National Film Award for Best Picture. His film Tumbbad opened the Critic’s Week at the 75th Venice Film Festival.'
    // }
  ],
  designWorkshopData: [
    {
      id: 11,
      img: process.env.REACT_APP_AWS_S3_URI + '/annada.png',
      color: '#685EDA',
      color2: '#9990FF',
      genre: 'design',
      type: 'Workshop',
      title: 'Design Workshop',
      link: 'https://drive.google.com/file/d/1-VApwFFzYsxfs5Kc8vGfzK5YowaJ7DYP/view?usp=sharing',
      price: 149,
      name: 'Annada Menon',
      date: '4th February',
      time: '11:00a.m. - 12:00 p.m.',
      desc: 'Creating illustrations with the silver lining of nostalgia is an astounding skill and Annada Menon has it all! Having illustration featured in the cosmopolitan Annada is a going places!'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/rishabh.jpeg',
      color: '#685EDA',
      color2: '#9990FF',
      genre: 'design',
      type: 'Workshop',
      title: 'Product design',
      link: 'https://drive.google.com/file/d/1miS5p8eaeN-ZaLiip4ApnatmpnoVVMqj/view?usp=sharing',
      price: 149,
      name: 'Rishabh Jain',
      date: '11th February',
      time: '6:00 p.m. - 7:00 p.m.',
      desc: "Rishabh Jain's Journey as a product designer and as the founder of confetti studios, is admirable and one known to encompass learnings from multiple UI/UX projects impacting millions of users!"
    }
  ],
  mediaWorkshopData: [
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/nikita.jpeg',
      color: '#FF90E8',
      color2: '#FFC8F4',
      genre: 'media',
      type: 'Workshop',
      title: 'Creative Writing workshop',
      link: 'https://drive.google.com/file/d/1L4xS562Rld4_j7Lr1xv7iU0L4cu7gHPW/view?usp=sharing',
      price: 199,
      name: 'Nikita Singh',
      date: '13th February',
      time: '10:00 a.m. - 11:00 a.m.',
      desc: 'Having written a number of best selling novels, Nikita Singh is impacting and influencing numersous minds and lives. Having spoken on the Tedx platform on multiple occasions, this indian author is winning hearts!'
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/ankitmedia.png',
      color: '#FF90E8',
      color2: '#FFC8F4',
      genre: 'media',
      type: 'Workshop',
      title: 'Tech Journalism Workshop',
      link: 'https://drive.google.com/file/d/1w-fj86xTKa9X0jQjhH4UFLNu5HRpRvdO/view?usp=sharing',
      price: 149,
      date: '',
      time: '',
      desc: 'He has worked with renowned news channels and has received numerous awards for his outstanding works including “India’s Best Gadget Show” by ENBA India for his show- Tech it out.',
      namee: 'Ankit Tuteja'
    }
  ],
  animationWorkshopData: [
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/sandeepvfx.png',
      color: '#FE6263',
      color2: '#FD8A8B',
      genre: 'animation',
      type: 'Workshop',
      title: 'VFX Workshop',
      link: 'https://drive.google.com/file/d/1jRpV-ZjKNNTm8RFOGktaaZfCz73uQfAx/view?usp=sharing',
      price: 199,
      name: 'Sandeep Kamal',
      date: '12th February',
      time: '11:00 a.m.- 12:00 p.m.',
      desc: "Having contributed to critically acclaimed films such as Jal, Panipat, Badla, and Barfi, VFX designer and digitla nomad, Sandeep kamal's career is admired greatly"
    }
  ]
};

export default data;
