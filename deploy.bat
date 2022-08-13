:: Heroku login, please uncomment it if you do not login into heroku
heroku login
:: Set remote heroku
heroku git:remote -a ncovi-detail
:: Deploy to heroku
git push heroku main