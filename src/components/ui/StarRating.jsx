import { StarIcon } from 'lucide-react';

/**
 * Star Rating component to display vendor ratings
 * @param {Object} props - Component props
 * @param {number} props.rating - Rating value out of 5
 */
export default function StarRating({ rating }) {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={`full-${index}`} className="w-4 h-4 text-yellow-500 fill-current" />
      ))}
      
      {/* Render half star if needed */}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <StarIcon className="absolute w-4 h-4 text-gray-300 fill-current" />
          <div className="absolute overflow-hidden w-2 h-4">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>
      )}
      
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon key={`empty-${index}`} className="w-4 h-4 text-gray-300 fill-current" />
      ))}
      
      {/* Show numeric value */}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}