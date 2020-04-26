### Testing locally with the GCP Database
1. [Install and initialize the Cloud SDK](https://cloud.google.com/sdk/docs).
2. [Enable the Datastore, Pub/Sub, Cloud Storage JSON, Cloud Logging, and Google+ APIs](https://console.cloud.google.com/flows/enableapi?apiid=datastore.googleapis.com,pubsub,storage_api,logging,plus&_ga=2.200698478.1322426890.1587847446-1301243043.1587847446).
3. Open command line.
4. Run `gcloud auth application-default login`.
5. Run `gcloud services enable sqladmin`.
6. Download Cloud SQL proxy ([download for Windows 64-bit](https://dl.google.com/cloudsql/cloud_sql_proxy_x64.exe))
7. Navigate to where the folder was downloaded in a terminal, and then run `cloud_sql_proxy.exe -instances="[YOUR_INSTANCE_CONNECTION_NAME]"=tcp:3306`.
8. In the `backend` folder, run the server by doing `python manage.py runserver`. 
