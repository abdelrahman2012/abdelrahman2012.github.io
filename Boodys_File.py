import pandas as pd
import tkinter
parent_widget = tkinter.Tk()
file_name = 'D:\School_Names_Python-File.xlsx' 
# setting the title of GUI window
parent_widget.title("Project van Abdelrahman")
# set the configuration of GUI windo
parent_widget.geometry("325x375")
df = pd.read_excel(file_name, index_col=0)
# print(df)
h = 50
h2 = 2

def FindName():
    if entry_widget in file_name:
        print(entry_widget)
    else:
        print('Hij/Zij is niet in het project')
label_widget = tkinter.Label(parent_widget, text=df)
entry_widget = tkinter.Entry(parent_widget)
entry_widget.insert(0, "Wie Om te Zoeken?")
button = tkinter.Button(parent_widget, text="Submit")
button.pack()
entry_widget.pack()
label_widget.pack()
tkinter.mainloop()
