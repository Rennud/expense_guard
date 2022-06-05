#!/bin/bash
echo "1 for FE, 2 for BE, 3 for quit: "
read CONFIRMATION

# rum FE
if [ $CONFIRMATION == '1' ]; then 
    cd client
    yarn start 

# run BE
elif [ $CONFIRMATION == '2' ]; then 
    # activate venv
    cd server/venv/bin
    source activate

    # run flask app 
    cd ../../
    flask run --no-debugger
    
# exit     
elif [ $CONFIRMATION == '3' ]; then 
    echo "Code more next time."
    return
fi

deactivate
cd ~ && cd expense_guard