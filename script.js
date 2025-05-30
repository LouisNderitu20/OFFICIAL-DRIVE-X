document.addEventListener('DOMContentLoaded', () => {
  // === Navigation logic ===
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.main-content > section');
  const exploreBtn = document.getElementById('explore-models');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      sections.forEach(section => section.classList.add('hidden'));
      const sectionName = item.getAttribute('data-title')?.toLowerCase();
      const target = document.querySelector(`.${sectionName}`);
      if (target) target.classList.remove('hidden');
    });
  });

  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const modelsNavItem = document.querySelector('.nav-item[data-title="Models"]');
      if (modelsNavItem) modelsNavItem.click();
    });
  }

  // === Theme logic ===
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  const setTheme = (theme) => {
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    if (themeToggle) themeToggle.checked = theme === 'light';
  };

  const toggleTheme = () => {
    const theme = themeToggle.checked ? 'light' : 'dark';
    setTheme(theme);
  };

  if (themeToggle) {
    themeToggle.addEventListener('change', toggleTheme);
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  }

  // === Car modal logic ===
  const carData = {
    "tesla-model-s": {
      title: "Tesla Model S",
      image: "images/tesla.jpg",
      description: "A luxury electric sedan with insane acceleration and cutting-edge technology.",
      specs: [
        "396 miles of range",
        "0–60 mph in 1.99 seconds",
        "Autopilot and Full Self-Driving capabilities",
        "Dual Motor All-Wheel Drive",
        "Top speed: 200 mph",
        "17” Cinematic Display"
      ]
    },
    "audi-e-tron": {
      title: "Audi e-tron GT",
      image: "images/audi.jpg",
      description: "Audi’s electric grand tourer blends performance with luxury.",
      specs: [
        "238 miles of range",
        "0–60 mph in 3.9 seconds",
        "Quattro AWD",
        "Two electric motors",
        "Luxury interior with ambient lighting",
        "800V fast charging"
      ]
    }
  };
});
