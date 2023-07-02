@echo OFF

:: Heroku login, please uncomment it if you do not login into heroku
call heroku login
:: Set remote heroku
call heroku git:remote -a ncovi-detail
:: Deploy to heroku
call git push heroku main
:: open
call heroku open