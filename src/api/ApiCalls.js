const STORAGE_KEY = 'students';

function loadData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function PostCall(student) {
    const students = loadData();
    students[student.nic] = student; // NIC'i anahtar olarak kullan
    saveData(students);
}

export function GetCall(nic) {
    const students = loadData();
    return students[nic];
}

export function DeleteCall(nic) {
    const students = loadData();
    delete students[nic];
    saveData(students);
}

export function PatchCall(nic, updatedStudent) {
    const students = loadData();
    students[nic] = { ...students[nic], ...updatedStudent };
    saveData(students);
}

export function GetAllStudents() {
    return loadData();
}
