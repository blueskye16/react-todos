const TASKS = []
const RENDER_EVENT = 'render-tasks'

document.addEventListener('DOMContentLoaded', function () {
    displayCreateTaskForm()
    iniCategoryEventHandlers()

    // Handle submit form
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('submit', (event) => {
        event.preventDefault()
        addTask()
    })
})

function showForm(overlay, form) {
    overlay.classList.remove('hidden')
    form.classList.remove('hidden')
}

function hideForm(overlay, form) {
    overlay.classList.add('hidden')
    form.classList.add('hidden')
}

function iniCategoryEventHandlers() {
    const formCreateCategory = document.getElementById('formCreateCategory')
    const overlay = document.querySelector('[node-create-form]')

    document.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (action === 'create') {
            showForm(overlay, formCreateCategory)
        } else if (action === 'cancel') {
            hideForm(overlay, formCreateCategory)
        }
    })
}

/* function cancelCreateCategory() {
  const formCreateCategory = document.getElementById('formCreateCategory');
  const overlay = document.querySelector('[node-create-form]');

  overlay.classList.add('hidden');
  formCreateCategory.classList.add('hidden');
}

function displayCreateCategory() {
  const formCreateCategory = document.getElementById('formCreateCategory');
  const btnCreateCategory = document.getElementById('btnCreateCategory');
  const overlay = document.querySelector('[node-create-form]');
  
  btnCreateCategory.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    formCreateCategory.classList.remove('hidden');
  });
}
 */
function addTask() {
    const title = document.getElementById('inputTitle').value
    const category = document.getElementById('inputCategory').value
    const taskForm = document.getElementById('taskForm')

    if (title && category) {
        alert(`Task berhasil disimpan!\nJudul: ${title}\nKategori: ${category}`)
        // Sembunyikan form setelah submit
        taskForm.classList.remove('opacity-100', 'translate-y-0')
        taskForm.classList.add('opacity-0', '-translate-y-5')
    } else {
        alert('Harap isi judul dan pilih kategori!')
    }
}

function displayCreateTaskForm() {
    // Ambil elemen tombol dan form
    const showFormButton = document.getElementById('showFormButton')
    const taskForm = document.getElementById('taskForm')

    // Tampilkan form saat tombol diklik
    showFormButton.addEventListener('click', () => {
        // Toggle visibility form dengan animasi
        if (taskForm.classList.contains('opacity-0')) {
            taskForm.classList.remove('opacity-0', '-translate-y-5') // Munculkan form
            taskForm.classList.add('opacity-100', 'translate-y-0')
        } else {
            taskForm.classList.remove('opacity-100', 'translate-y-0') // Sembunyikan form
            taskForm.classList.add('opacity-0', '-translate-y-5')
        }
    })
}
