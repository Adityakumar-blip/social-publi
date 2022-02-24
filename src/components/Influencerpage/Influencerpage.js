import React from 'react'
import './Influencerpage.css'
import {Link} from 'react-router-dom'

const Influencerpage = () => {
  return (
    <> 
        <div className="influencerPage-wrapper">
          <div className='infy-heading'>
            <h1>Become A FameTroop</h1>
            <p>To Become A Part of socialpubli FameTroop</p>
          </div>
          <div className="form-wrapper">
            <div className="instaId">
              <input type="text" required />
              <label>Insta-Id<span>*</span></label>
            </div>
            <div className="instaId">
              <input type="text" required />
              <label>Followers<span>*</span></label>
            </div>
            <div className="instaId">
              <input type="number" required />
              <label>Contact Details<span>*</span></label>
            </div>
            <div className="genre" required >
              <h5>Genre<span>*</span></h5>
              <div class="form-check checkbox">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                <label class="form-check-label" for="flexCheckDisabled">
                  Fashion/Lifestyle
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Beauty
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Food
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Travel
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Fitness
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tech
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              EdTech
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Parenting
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Finance
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Gaming
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Auto
              </label>
              </div>
              <button type="button" class="submit-button">
            <Link className='submit-link' to='/influencerpage'>Submit</Link>
            </button>
            </div>
             
          </div>
        </div>
    </>
  )
}

export default Influencerpage