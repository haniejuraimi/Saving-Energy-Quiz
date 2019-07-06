Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )

  Swal.fire({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: {
      popup: 'animated tada'
    }
  })