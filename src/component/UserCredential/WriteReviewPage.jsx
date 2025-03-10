// import { useState } from 'react';
// import { Star, Camera, Trash2 } from 'lucide-react';
// import { Alert, AlertDescription } from "@/components/ui/alert";

// const WriteReviewPage = () => {
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [images, setImages] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     review: '',
//     pros: '',
//     cons: '',
//     nickname: '',
//     email: '',
//     location: '',
//     wouldRecommend: null
//   });
//   const [errors, setErrors] = useState({});

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length + images.length > 5) {
//       alert('Maximum 5 images allowed');
//       return;
//     }
//     setImages(prev => [...prev, ...files.map(file => URL.createObjectURL(file))]);
//   };

//   const removeImage = (index) => {
//     setImages(prev => prev.filter((_, i) => i !== index));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!rating) newErrors.rating = 'Please select a rating';
//     if (!formData.title.trim()) newErrors.title = 'Please enter a title';
//     if (formData.review.length < 50) newErrors.review = 'Review must be at least 50 characters';
//     if (!formData.email) newErrors.email = 'Email is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length === 0) {
//       console.log('Form submitted:', { ...formData, rating, images });
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Write Your Review</h1>
//           <p className="text-gray-600">Share your experience to help others make better choices</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-xl shadow-lg">
//           {/* Rating Section */}
//           <div className="space-y-2">
//             <label className="block text-lg font-medium text-gray-900">Overall Rating</label>
//             <div className="flex items-center space-x-2">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   type="button"
//                   onClick={() => setRating(star)}
//                   onMouseEnter={() => setHoverRating(star)}
//                   onMouseLeave={() => setHoverRating(0)}
//                   className="focus:outline-none"
//                 >
//                   <Star
//                     className={`w-8 h-8 ${
//                       star <= (hoverRating || rating)
//                         ? 'fill-yellow-400 text-yellow-400'
//                         : 'text-gray-300'
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>
//             {errors.rating && (
//               <Alert variant="destructive" className="mt-2">
//                 <AlertDescription>{errors.rating}</AlertDescription>
//               </Alert>
//             )}
//           </div>

//           {/* Review Title */}
//           <div className="space-y-2">
//             <label className="block text-lg font-medium text-gray-900">
//               Review Title
//             </label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="Summarize your experience"
//             />
//             {errors.title && (
//               <Alert variant="destructive">
//                 <AlertDescription>{errors.title}</AlertDescription>
//               </Alert>
//             )}
//           </div>

//           {/* Main Review */}
//           <div className="space-y-2">
//             <label className="block text-lg font-medium text-gray-900">
//               Your Review
//             </label>
//             <textarea
//               value={formData.review}
//               onChange={(e) => setFormData({ ...formData, review: e.target.value })}
//               rows="6"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               placeholder="What did you like or dislike? How was your experience?"
//             />
//             <p className="text-sm text-gray-500">
//               {formData.review.length}/1000 characters (minimum 50)
//             </p>
//             {errors.review && (
//               <Alert variant="destructive">
//                 <AlertDescription>{errors.review}</AlertDescription>
//               </Alert>
//             )}
//           </div>

//           {/* Pros & Cons */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-lg font-medium text-gray-900">Pros</label>
//               <textarea
//                 value={formData.pros}
//                 onChange={(e) => setFormData({ ...formData, pros: e.target.value })}
//                 rows="4"
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="What did you like?"
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="block text-lg font-medium text-gray-900">Cons</label>
//               <textarea
//                 value={formData.cons}
//                 onChange={(e) => setFormData({ ...formData, cons: e.target.value })}
//                 rows="4"
//                 className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="What could be improved?"
//               />
//             </div>
//           </div>

//           {/* Image Upload */}
//           <div className="space-y-4">
//             <label className="block text-lg font-medium text-gray-900">
//               Add Photos
//             </label>
//             <div className="flex flex-wrap gap-4">
//               {images.map((image, index) => (
//                 <div key={index} className="relative">
//                   <img
//                     src={image}
//                     alt={`Review ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeImage(index)}
//                     className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               ))}
//               {images.length < 5 && (
//                 <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
//                   <Camera className="w-8 h-8 text-gray-400" />
//                   <span className="text-sm text-gray-500">Add Photo</span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="hidden"
//                     onChange={handleImageUpload}
//                     multiple
//                   />
//                 </label>
//               )}
//             </div>
//             <p className="text-sm text-gray-500">Maximum 5 images</p>
//           </div>

//           {/* Would Recommend */}
//           <div className="space-y-2">
//             <label className="block text-lg font-medium text-gray-900">
//               Would you recommend this product?
//             </label>
//             <div className="flex space-x-4">
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, wouldRecommend: true })}
//                 className={`px-4 py-2 rounded-lg ${
//                   formData.wouldRecommend === true
//                     ? 'bg-green-500 text-white'
//                     : 'bg-gray-100 hover:bg-gray-200'
//                 }`}
//               >
//                 Yes
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, wouldRecommend: false })}
//                 className={`px-4 py-2 rounded-lg ${
//                   formData.wouldRecommend === false
//                     ? 'bg-red-500 text-white'
//                     : 'bg-gray-100 hover:bg-gray-200'
//                 }`}
//               >
//                 No
//               </button>
//             </div>
//           </div>

//           {/* About You */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-gray-900">About You</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Nickname
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.nickname}
//                   onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
//                   className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="How should we display your name?"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your email (not displayed publicly)"
//                 />
//                 {errors.email && (
//                   <Alert variant="destructive" className="mt-2">
//                     <AlertDescription>{errors.email}</AlertDescription>
//                   </Alert>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Location (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.location}
//                   onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                   className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                   placeholder="City, State"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Submit Review
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WriteReviewPage;


import { useState } from 'react';
import { Star, Camera, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const WriteReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    review: '',
    pros: '',
    cons: '',
    nickname: '',
    email: '',
    location: '',
    wouldRecommend: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert('Maximum 5 images allowed');
      return;
    }
    setImages(prev => [...prev, ...files.map(file => URL.createObjectURL(file))]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!rating) newErrors.rating = 'Please select a rating';
    if (!formData.title.trim()) newErrors.title = 'Please enter a title';
    if (formData.review.length < 50) newErrors.review = 'Review must be at least 50 characters';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });
      
      try {
        // Prepare the data for the API
        const reviewData = {
          ...formData,
          rating,
          // Convert image data if needed - this depends on your API requirements
          // This example assumes you'll need to handle image files separately
          // or that the API handles base64 strings
        };
        
        // Make the API request
        const response = await fetch('https://ozleaddatabase-1.onrender.com/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Review submitted successfully:', result);
        
        // Show success message
        setSubmitStatus({
          type: 'success',
          message: 'Your review has been submitted successfully!'
        });
        
        // Reset form after successful submission
        setRating(0);
        setImages([]);
        setFormData({
          title: '',
          review: '',
          pros: '',
          cons: '',
          nickname: '',
          email: '',
          location: '',
          wouldRecommend: null
        });
        
      } catch (error) {
        console.error('Error submitting review:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Failed to submit your review. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Write Your Review</h1>
          <p className="text-gray-600">Share your experience to help others make better choices</p>
        </div>

        {/* Status Messages */}
        {submitStatus.message && (
          <Alert 
            variant={submitStatus.type === 'success' ? 'default' : 'destructive'} 
            className={`mb-6 ${submitStatus.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' : ''}`}
          >
            <AlertDescription>{submitStatus.message}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-xl shadow-lg">
          {/* Rating Section */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-900">Overall Rating</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoverRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {errors.rating && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{errors.rating}</AlertDescription>
              </Alert>
            )}
          </div>

          {/* Review Title */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-900">
              Review Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Summarize your experience"
            />
            {errors.title && (
              <Alert variant="destructive">
                <AlertDescription>{errors.title}</AlertDescription>
              </Alert>
            )}
          </div>

          {/* Main Review */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-900">
              Your Review
            </label>
            <textarea
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              rows="6"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="What did you like or dislike? How was your experience?"
            />
            <p className="text-sm text-gray-500">
              {formData.review.length}/1000 characters (minimum 50)
            </p>
            {errors.review && (
              <Alert variant="destructive">
                <AlertDescription>{errors.review}</AlertDescription>
              </Alert>
            )}
          </div>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-900">Pros</label>
              <textarea
                value={formData.pros}
                onChange={(e) => setFormData({ ...formData, pros: e.target.value })}
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="What did you like?"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-900">Cons</label>
              <textarea
                value={formData.cons}
                onChange={(e) => setFormData({ ...formData, cons: e.target.value })}
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="What could be improved?"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-900">
              Add Photos
            </label>
            <div className="flex flex-wrap gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Review ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {images.length < 5 && (
                <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                  <Camera className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    multiple
                  />
                </label>
              )}
            </div>
            <p className="text-sm text-gray-500">Maximum 5 images</p>
          </div>

          {/* Would Recommend */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-900">
              Would you recommend this product?
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, wouldRecommend: true })}
                className={`px-4 py-2 rounded-lg ${
                  formData.wouldRecommend === true
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, wouldRecommend: false })}
                className={`px-4 py-2 rounded-lg ${
                  formData.wouldRecommend === false
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* About You */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">About You</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nickname
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="How should we display your name?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email (not displayed publicly)"
                />
                {errors.email && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-lg flex items-center`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReviewPage;