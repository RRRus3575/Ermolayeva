const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    message: form.message.value
  };

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    form.reset();
  } catch (err) {
    alert('Щось пішло не так, спробуй ще раз');
    console.error(err);
  }
});