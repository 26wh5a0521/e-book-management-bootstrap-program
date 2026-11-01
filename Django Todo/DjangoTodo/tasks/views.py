
from django.shortcuts import render, redirect, get_object_or_404
from .models import Task


# Display tasks and add new tasks
def home(request):
    if request.method == 'POST':
        title = request.POST.get('title')

        if title:
            Task.objects.create(title=title)

        return redirect('home')

    tasks = Task.objects.all()
    return render(request, 'tasks/home.html', {'tasks': tasks})


# Mark task as completed or incomplete
def complete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)

    if request.method == 'POST':
        task.completed = not task.completed
        task.save()

    return redirect('home')


# Delete a task
def delete_task(request, task_id):
    if request.method == 'POST':
        task = get_object_or_404(Task, id=task_id)
        task.delete()

    return redirect('home')
