var JOBSTATUS = {
    'todo':{'icon':'square','next':'doing'},
    'doing':{'icon':'spinner', 'next':'done'},
    'done':{'icon':'check-square','next':'todo'}
}


var SAMPLEDATA = {
    'items': [
        {
            'id': 1,
            'title': 'Short description of item',
            'body': 'Do this thing',
            'status': 'doing',
            'added': '4 days ago',
            'priority': 1,
            'assignedto': 'Jonathan',
            'category': 'house'
        },
        {
            'id': 2,
            'title': 'Title 2',
            'body': 'Do this other thing really very well this has loads of text',
            'status': 'done',
            'added': '1 hour ago',
            'priority': 4,
            'assignedto': 'Iona',
            'category': 'house'
        },
        {
            'id': 3,
            'title': 'Title 3',
            'body': 'Do another thing properly',
            'status': 'todo',
            'added': '23 mins ago',
            'priority': 2,
            'assignedto': 'Jonathan',
            'category': 'house'
        },
        {
            'id': 4,
            'title': 'Title 4',
            'body': 'Do another thing',
            'status': 'doing',
            'added': '23 mins ago',
            'priority': 3,
            'assignedto': 'Jonathan',
            'category': 'house'
        }
    ]
}

