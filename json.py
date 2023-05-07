import json

people_string = {
    "people": [
        {
            "name": "Alice",
            "age": 25,
            "email": "alice@example.com",
            "address": {
                "street": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "zip": "12345"
            },
            "is_active": True,
            "friends": [
                {
                    "name": "Bob",
                    "age": 28
                },
                {
                    "name": "Charlie",
                    "age": 30
                }
            ]
        }
    ]
}

print(type(people_string["people"][0]["name"]))

