import Link from 'next/link';

export default function Footer() {

  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div>

      <footer>
        <div className="footer bg-dark text-white text-center">
          <ul>
            <li className="list-item">
              <p>Copyright: Blackboard Nepal {getYear()}</p><br></br>
            </li>
            <li className="list-item">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>

          
    
        </div>
      </footer>


      <style jsx global>{`
        .footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .list-item{
          list-style: none;
        }
      `}</style>

    </div>

  )
}
