'use strict'

const requirements = []
const evaluatedCandidates = []

const createCandidate = function (name, skills) {
    const candidate = {
        name,
        skills
    }

    return candidate
}

const addRequirement = function (requirement) {
    requirements.push(requirement)
}

const conductInterview = function (candidate, requirements) {
    for (const requirement of requirements) {
        if (!candidate.skills.includes(requirement)) return false
    }

    return true
}

const evaluateCandidate = function (candidate) {
    let scoreOfCandidate = 0

    for (const requirement of requirements) {
        if (candidate.skills.includes(requirement)) scoreOfCandidate += 1
    }

    return scoreOfCandidate * 10
}

const scheduleInterviews = function (candidates, requirements, evaluationFunction) {
    let score = 0

    for (const candidate of candidates) {
        score = evaluationFunction(candidate)
        evaluatedCandidates.push({ candidate, score })
    }

    return evaluatedCandidates.sort((a, b) => b.score - a.score)
}

const candidates = [
    createCandidate('John', ['JavaScript', 'HTML', 'CSS']),
    createCandidate('Alice', ['JavaScript', 'React', 'Node.js']),
    createCandidate('Bob', ['HTML', 'CSS', 'JavaScript', 'React'])
]

addRequirement('JavaScript')
addRequirement('HTML')
addRequirement('CSS')
addRequirement('React')
// addRequirement('Node.js')

console.log(conductInterview(candidates[0], requirements))

console.log(scheduleInterviews(candidates, requirements, evaluateCandidate))
