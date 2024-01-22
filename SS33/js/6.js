class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const jobs = [];

function promptSync(question) {
    return prompt(question);
}

function addJob() {
    const id = jobs.length + 1;
    const title = promptSync('Nhập tiêu đề công việc: ');
    const description = promptSync('Nhập mô tả công việc: ');
    const completed = false;

    const newJob = new Job(id, title, description, completed);
    jobs.push(newJob);

    console.log('Công việc đã được thêm mới.');
}

function displayJobs() {
    console.log('Danh sách công việc:');
    jobs.forEach(job => {
        console.log(`ID: ${job.id}, Tiêu đề: ${job.title}, Mô tả: ${job.description}, Hoàn thành: ${job.completed}`);
    });
}

function findJobById() {
    const idToFind = parseInt(promptSync('Nhập ID công việc cần tìm:'));
    const foundJob = jobs.find(job => job.id === idToFind);

    if (foundJob) {
        console.log('Thông tin công việc:');
        console.log(`ID: ${foundJob.id}, Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`);
    } else {
        console.log('Không tìm thấy công việc với ID đã nhập.');
    }
}

function main() {
    let choice;
    do {
        console.log('\nMENU:');
        console.log('1. Thêm công việc mới');
        console.log('2. Hiển thị danh sách công việc');
        console.log('3. Tìm kiếm công việc theo ID');
        console.log('4. Thoát chương trình');

        choice = parseInt(promptSync('Nhập lựa chọn của bạn: '));

        switch (choice) {
            case 1:
                addJob();
                break;
            case 2:
                displayJobs();
                break;
            case 3:
                findJobById();
                break;
            case 4:
                console.log('Chương trình kết thúc.');
                break;
            default:
                console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại.');
        }
    } while (choice !== 4);
}

main();
