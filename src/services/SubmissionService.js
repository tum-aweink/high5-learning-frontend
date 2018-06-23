import HttpService from './HttpService';

export default class SubmissionService {

    static baseUrl() {
        return HttpService.apiURL() + "/submission/";
    }

    static getSubmissionOfHomework(homeworkId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SubmissionService.baseUrl()}` + homeworkId, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        })
    }


    static getSubmissionOfHomeworkOfStudent(homeworkId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SubmissionService.baseUrl()}user/` + homeworkId, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        })
    }

    // gets a key-value pair of homeworkId, rankingPosition
    static getRankingOfSubmissions(classId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SubmissionService.baseUrl()}ranking/` + classId, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        })
    }

    static addNewSubmission(submissionToAdd) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${SubmissionService.baseUrl()}`, submissionToAdd,
                function (data) {
                    resolve(data);
                }, function (textStatus) {
                    reject(textStatus);
                });
        })
    }

}






