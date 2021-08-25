
export function NotePreview({note}) {
    const src= 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.photo-art.co.il%2Fwp-content%2Fuploads%2F2015%2F09%2FBY1A4457.jpg&imgrefurl=https%3A%2F%2Fwww.photo-art.co.il%2Fphoto%2Fby1a4457&tbnid=Jx2a9dFGeAQVqM&vet=12ahUKEwi2nfO6wczyAhXs6eAKHdN7ClQQMygBegUIARC5AQ..i&docid=8TqUjfwYQbrZFM&w=1200&h=800&q=%D7%AA%D7%9E%D7%95%D7%A0%D7%94&ved=2ahUKEwi2nfO6wczyAhXs6eAKHdN7ClQQMygBegUIARC5AQ'
    return(
        <div className="note-preview">
            {note.txt}
            {note.noteType === 'src' && <img src={src}></img>}
        </div>


    )
}